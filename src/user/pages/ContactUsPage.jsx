import { useState } from 'react';
import {database} from '../../auth/firebase/firebase';

export function ContactUsPage() {
	const [name, setName] = useState();
	const [age, setAge] = useState();

	const Push = () => {
		database.ref("user").set({
			name: name,
			age: age,
		}).catch(alert);
	}

	return (
		<>
      <div className="flex p-4">

      <div className="w-1/4">

      <div className="flex flex-col items-center">
	  <p className="text-center font-bold">Contact Us</p>
	  <img className="mb-2" src="/ruta/de/la/imagen.jpg" alt="Contact Us" />
       

	  </div>

     </div>


	  </div>
      
		
		<div className="App" style={{ marginTop: 250 }}>

			
			<center>
				<input placeholder="Enter your name" value={name}
					onChange={(e) => setName(e.target.value)} />
				<br /><br />
				<input placeholder="Enter your age" value={age}
					onChange={(e) => setAge(e.target.value)} />
				<br /><br />
				<button  className="bg-[#8B96FE] text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={Push}>Send</button>
			</center>

    </div>
		</>
	);
}

