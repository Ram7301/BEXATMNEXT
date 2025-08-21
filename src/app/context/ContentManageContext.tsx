"use client";
import datacontnt from '@/Mock.db/Home.json'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ContentType = {
  title: string;
  description: string;
};

type ContentManageContextType = {
  content: any | null;
  setContent: (content: any) => void;
  loading: boolean;
  error: string | null;
  getContent: (content: any) => void;
};

const ContentManageContext = createContext<ContentManageContextType | undefined>(undefined);

export const ContentManageProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch initial content from API
  useEffect(() => {
    // const fetchContent = async () => {
    //   try {
    //     const res = await fetch("/Mock.db/Home.json");
    //     if (!res.ok) throw new Error("Failed to fetch content");

    //     const data: any = await res.json();
    //     console.log(data,'---------------');
        
    //     setContent(data);
    //   } catch (err: any) {
    //     setError(err.message || "Something went wrong");
    //   } finally {
    //     setLoading(false);
    //   }
    // };
console.log(datacontnt);

    // fetchContent();
     setContent(datacontnt);
  }, []);


  function  getContent(id:any){
    if(content){
     return content.find((val:any) => val.id == id)
    }else{
      return {}
    }
  }


  return (
    <ContentManageContext.Provider value={{ content, setContent, loading, error,getContent }}>
      {children}
    </ContentManageContext.Provider>
  );
};

// ✅ Custom Hook
export const useContentManage = () => {
  const context = useContext(ContentManageContext);
  if (!context) {
    throw new Error("useContentManage must be used within ContentManageProvider");
  }
  return context;
};
