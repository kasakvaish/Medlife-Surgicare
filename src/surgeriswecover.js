import './App.css';
import Body from './body';
import FootText from './foottext';
import image from './Pic/IMAGE.jpg'
import image1 from './Pic/IMAGE (1).jpg'
import image2 from './Pic/IMAGE-1.jpg'
import image3 from './Pic/IMAGE-2.jpg'
import image4 from './Pic/IMAGE-3.jpg'
import image5 from './Pic/IMAGE-4.jpg'
import image6 from './Pic/IMAGE-5.jpg'
import image7 from './Pic/IMAGE-6.jpg'
import image8 from './Pic/IMAGE-7.jpg'
import './surgeriswecover.css'

function SurgeryCovered() {
  return (
    <div>
      <div>
        <div className="surgery-head"
          style={{
          
        }}
        >
          Surgeries We Cover
          </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',padding: '0 2%',justifyContent:'center',}}>
      <Body img={image} name='Piles' text='Blood vessels in and around the anus get swollen and cause pain'/>
      <Body img={image1}  name='Fistula' text='A condition causing abnormal linking of two body parts'/>
      <Body img={image2}  name='Fissure' text='A tear in the tissue lining the anus that causes bleeding'/>
      </div>
      <div style={{display:'flex',flexDirection:'row',padding: '0 2%',justifyContent:'center',}}>
      <Body img={image8}  name='Pilonidal Sinus' text='A hole forms in the skin near the tailbone with hair and skin'/>
      <Body img={image3}  name='Varicose Veins' text='Veins get enlarged and twisted, generally near the legs and feet'/>
      <Body img={image4}  name='Varicocele' text='Veins get enlarged and twisted within the scrotum'/>
      </div>
      <div style={{display:'flex',flexDirection:'row',padding: '0 2%',justifyContent:'center',}}>
      <Body img={image5}  name='Kidney Stone' text='Deposits of minerals and salts that harden within the kidney'/>
      <Body img={image6}  name='Phimosis' text='Inability to retract skin covering the head of the penis'/>
      <Body  img={image7} name='Hydrocele' text='Swelling of the scrotum due to fluid build-up around the testicle'/>
      </div>
      

    </div>
  );
}

export default SurgeryCovered;
