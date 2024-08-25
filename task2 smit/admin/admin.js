import {updateDoc,getDoc,doc, deleteDoc,getDocs, db, collection,  auth,signOut,onAuthStateChanged } from "../firebass.js";
let formUpdateName = document.getElementById('stdName');
let formUpateLink = document.getElementById('link');
let updateBtn = document.getElementById('update');
let logout = document.getElementById("logout");
let data = document.querySelector('.data')
let loader = document.getElementById('loader');
loader.style.display = 'none';
let isEdit = null;
let Form = document.querySelector('.Form');
Form .style.display = "none";

window.editData = async (id,)=>{
  
  try{

 let currentData = await getDoc(doc(db, "assignments", id));
  const {AssignmentLink,studentName} = currentData.data();
    formUpdateName.value = studentName;
    formUpateLink.value = AssignmentLink;
    isEdit = id;
    Form .style.display = "block";
   
    }
    catch(error){
      console.log(error);
    }
}
 const updateData =async () => {
 updateBtn.innerText = "updating...."

  try{

    await updateDoc(doc(db, "assignments", isEdit),{
      studentName: formUpdateName.value,
      AssignmentLink:formUpateLink.value,

    });
    getAssignments();
   
    }
    catch(error){
      console.log(error);
    }
    finally{
      updateBtn.innerText = "updated"
      Form .style.display = "none";
     
      
    }

    }
 updateBtn.addEventListener('click',updateData)






 

window.deleteData = async (id,button)=>{
 button.innerHTML = "Deleting........."
  try{

    await deleteDoc(doc(db, "assignments", id));
    getAssignments();
   
    }
    catch(error){
      console.log(error);
    }
}




const getAssignments = async () => {
    loader.style.display = 'block';
    data.innerHTML = '';
    try {
      const querySnapshot = await getDocs(collection(db, "assignments"));
      if (querySnapshot.empty) {
        data.innerHTML += "No Data Found"
      }
      querySnapshot.forEach((doc) => {
        const { studentName, AssignmentLink } = doc.data();
        data.innerHTML += `
          <p>${studentName}</p>
          <a href="${AssignmentLink}">${AssignmentLink}</a>
          <button onclick="editData('${doc.id}' ,this) ">Edit</button>
          <button  onclick="deleteData('${doc.id}',this)">Delete</button>`
      });
    }
    catch (error) {
      console.log(error)
    }
    finally {
      loader.style.display = "none";
    }
  }
 





  getAssignments();
  
  














const Logout = ()=>{
    signOut(auth).then(() => {
        Toastify({
            text: "Logout Sucesfully",
            duration: 3000
            }).showToast();
      }).catch((error) => {
        Toastify({
            text: error,
            duration: 3000
            }).showToast();
      });
}

logout.addEventListener('click',Logout)


onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = '../login/login.html'
    } 
  });



  