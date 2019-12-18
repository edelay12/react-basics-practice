function App(props) {
    console.log(props)
return (
<div>
    <header> 
    
    <img className='profile' src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="Image of Sally Joe" /> 
    <h1> Sally Joe's Resume </h1> 
  </header>




</div>);
}


ReactDOM.render(React.createElement(App) , document.querySelector('#app-root'));

ReactDOM.render(React.createElement(body), document.querySelector('#body-root')); 

function body() {
    return (
        <div>
        <section id="ContactInfo">
   
        <h2> Contact Information</h2>
       <ul>
         <li> Email: <a href="https://www.gmail.com"> SallyJ@gmail.com </a></li>
         <li>P: 123 - 456 - 7891</li>
         <li> <a href="https://www.LinkedIn.com"> LinkedIn</a></li>
       </ul>
   </section>

   <main id="EmployementHistory">
     <h2> Employement History</h2>
      
      <h3> Siri Team Lead -   Apple <br></br>
        03/2016 - Present
      </h3>
     
       <ul>
         <li> Assisted with code revisions</li>
         <li> Assisted on Design of new IPhone</li>
         <li> Became Team Lead of Siri Deveoment</li>
       </ul>
<hr></hr>
      <h3> Search Development Manager -   Google <br></br>
        03/2014 - 02/2016
      </h3>
       <ul>
         <li> Example</li>
         <li> Example</li>
         <li> Example</li>
       </ul>
<hr></hr>
      <h3> Product Tester -   Microsoft <br></br>
        03/2013 - 03/2014
      </h3>
       <ul>
         <li>Example</li>
         <li>Example</li>
         <li>Example</li>
       </ul>
   </main>

   <section id="EducationInfo">
  
        <h2> Education </h2>     
   <ul>
     <li><h3> Lindenwood University - May 2013</h3>
     <h4> Bachlors of Business Administration </h4>
     </li>
     </ul>
       </section>

   </div>
    )};
