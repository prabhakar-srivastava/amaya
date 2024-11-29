import lashaData from '@/utils/JSON/lasha.json'
export const useID=async (id:string)=>{
    const param=await id;
    if(id){
        console.log(id);
        return lashaData?.lasha.filter((res)=>res?.uid===id)
    }
}