import axios from "axios";
import { useState, useEffect } from "react";

interface IProps {
    multiline?: boolean;
    change: Function;
}

function ImageUpload({ multiline, change }: IProps) {
    const [Images, setImages] = useState<any>([]);
    const [ImagesURL, setImagesURL] = useState<any>([]);
    const [Finished, setFinished] = useState(false);
    useEffect(() => {
        if (Images.length > 0) {
            const newImagesUrl = [] as any;
            Images.forEach((image: any) => newImagesUrl.push(URL.createObjectURL(image)));
            setImagesURL(newImagesUrl);
        }
    }, [Images]);

    const handleChange = ({ target: { files } }: React.ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            const data = [...Array.from(files)];
            setImages(data);
        }
    };

    const uploadImageMultiple = async () => {
        const urls = [];
        for (let index = 0; index < Images.length; index++) {
            const data = new FormData();
            data.append("file", Images[index]);
            data.append("upload_preset", "react-upload");
            data.append("tags", "browser_upload");
            data.append("cloud_name", "dtvbkgf9w");
            const newData = await fetch("https://api.cloudinary.com/v1_1/dtvbkgf9w/upload", {
                body: data,
                method: "POST",
            });
            const { url } = await newData.json();
            urls.push(url);
        }
        change(urls);
        setFinished(true);
    };
    const uploadImage = async () => {
        const data = new FormData();
        data.append("file", Images[0]);
        data.append("upload_preset", "react-upload");
        data.append("tags", "browser_upload");
        data.append("cloud_name", "dtvbkgf9w");
        const newData = await fetch("https://api.cloudinary.com/v1_1/dtvbkgf9w/upload", {
            body: data,
            method: "POST",
        });
        const { url } = await newData.json();
        change(url);
        setFinished(true);
    };

    return (
        <div>
            <input
                type="file"
                disabled={Finished}
                multiple={multiline || false}
                accept="image/*"
                onChange={handleChange}
            />
            <div className="grid grid-cols-5 gap-4 mt-2">
                {ImagesURL.map((i: string, index: number) => (
                    <img key={index} src={i} className="w-full h-full" alt="..." />
                ))}
                {Images.length > 0 && (
                    <button
                        disabled={Finished}
                        className="bg-green-400 py-2 px-3 rounded-sm text-center text-white"
                        onClick={multiline ? uploadImageMultiple : uploadImage}
                    >
                        Subir
                    </button>
                )}
                {Finished && (
                    <button className="bg-green-400 py-2 px-3 rounded-sm text-center text-white">
                        Se subio correctamente
                    </button>
                )}
            </div>
        </div>
    );
}

export default ImageUpload;
