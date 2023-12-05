import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import ImageViewer from "react-simple-image-viewer";

const ImageGalerie = () => {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const fetchData = useCallback ( async (): Promise<void> => {
    try {
      setIsLoading(true)

      const response = await axios.get('/api/images');

      setData(response.data);
      
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching images:', error);
      setData([]);
    }
  }, []);

  useEffect(() => {
    fetchData();

  }, [fetchData]);

  const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return(
    <div>
      {isLoading? 
        <span className="flex justify-center font-extrabold font-serif"> 
          Chargement...
        </span>: 
        <div className="columns-6 m-auto w-5/6 gap-2">
          {data?.map((src, index) => (
            <Image 
              className="hover:shadow-md hover:shadow-slate-600 hover:cursor-pointer"
              src={src}
              onClick={() => openImageViewer(index)}
              width={200}
              height={200}
              key={src}
              style={{ margin: "10px" }}
              alt={src}
              loading='lazy'
            />
          ))}
        </div>
      }
      {isViewerOpen && (
        <ImageViewer src={data}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.7)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
};

export default ImageGalerie;
