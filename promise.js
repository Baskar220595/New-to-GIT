let order=new Promise((yes, no) => {
    let ShopOpen=true;
    if(ShopOpen)
    {
    yes("Order Placed") ;
    }

    else
    {
        no("order not placed");
    }
    
});

let cooking=new Promise((resolve, reject) => {
    resolve("Cooking...."); 
    
});

let deliver=new Promise((success, reject) => {
   success("Delivered....");
    
})



async function process()
{
     
    try {
      
        let success=await order;
        console.log(success);

        let cook=await cooking;
        console.log(cook);

        let delivering=await deliver;
        console.log(delivering);
        
    } catch (error) 
    {
       console.log(error);
        
    }
    finally{
        
        console.log("Stopped");
    }
}
process();