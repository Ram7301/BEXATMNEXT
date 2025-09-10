"use client";
import datacontnt from '@/Mock.db/Home.json'
import { useRouter } from 'next/navigation';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


type UserType = {
  user: any | null;
  SignIn: (user:string,password:string) => void;
  SignOut: () => void;
};


const userData = {
  user:"admin",
  password:"admin123",
  isAdmin:true,
}

const ContentManageContext = createContext<UserType | undefined>(undefined);

export const ContentManageProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>({});
  const router = useRouter()
  // useEffect(() => {;
  //    setContent(datacontnt);
  // }, []);


  function  SignIn(user:string,password:string){
    try{

      if(userData.user === user && userData.password  == password){
        setUser(userData)
        return{status:200,message:"success"}
      }else{
         return{status:404,message:"Error"}
      }
    }catch(e){
        return{status:500,message:"Error"}
    }
  }


  
  function  SignOut(){
       setUser({})
       router.replace('/')
  }



  return (
    <ContentManageContext.Provider value={{ user, SignIn, SignOut }}>
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
