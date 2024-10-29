import Banner from '../../assets/Banner.jpg'
import Marvel from '../../assets/Marvel.jpg'
import DC from '../../assets/DC.jpg'

function Home() {

  return (
    <div>
        <img src={Banner} alt="banner" className="banner"/>
        <section className='herois'>
            <img src={Marvel} alt="herois_marvel" className='img_home'/>
            <div className='card_home'>
                <h3 className='titulo_card_home'>Marvel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit id veniam dolorem voluptatem iste doloribus non. Facere aliquid ex ut fuga, blanditiis iure! Aliquid dolorem quisquam rem consectetur dignissimos!</p>
            </div>
            <div className='card_home'>
                <h3 className='titulo_card_home'>DC</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit id veniam dolorem voluptatem iste doloribus non. Facere aliquid ex ut fuga, blanditiis iure! Aliquid dolorem quisquam rem consectetur dignissimos!</p>
            </div>
            <img src={DC} alt="herois_dc" className='img_home'/>
        </section>
    </div>
  )
}

export default Home