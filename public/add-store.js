const form=document.getElementById("store-form");

form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const id=form.storeId.value;
  const address=form.address.value;

  if(id==='' || address===''){
    alert("Please fill all the fields");
  }

  const body={
    storeId: id,
    address: address,
  }
  try{
    const res=await fetch('/stores/v1/api', {
      
    });
  }catch(err){

  }
});