import { useEffect,useRef } from "react";


const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudname:'dy0qrz2ww',
            uploadPreset: 'xcq1fpzh'
        },function(error,result) {
            console.log(result)
        });
    },[]);

    return (
        <>
        <button onClick={() => widgetRef.current.open()}>
            upload
        </button> 
        </>
    );
}

export default UploadWidget;