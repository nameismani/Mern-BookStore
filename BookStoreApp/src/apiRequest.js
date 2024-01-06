const apiRequest = async(url="",optionsObj = null,errMessage=null)=>{
 
   try{
    const response = await fetch (url,optionsObj)
    if(!response.ok) throw Error("Please reload the page")
    const data = await response.json()
     if (data) return [errMessage,data]
   }catch(err){
    let data;
    errMessage = err.messaage
    return [errMessage,data=null]
   }
}
export default apiRequest