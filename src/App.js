import "./App.css";
import "./css/home.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Social_Media from "./components/social_media_links";

function App() {
  const my_name = "Arif Fakorizada";

  return (
    <div className="App">
      <Social_Media></Social_Media>
      <Header></Header>
      <h1>My name is {my_name}</h1>
      <h1>We gonna learn</h1>
      <p>
        Afghanistan,[d] officially the Islamic Emirate of Afghanistan,[e] is a
        landlocked country located at the crossroads of Central Asia and South
        Asia. It is bordered by Pakistan to the east and south,[f] Iran to the
        west, Turkmenistan to the northwest, Uzbekistan to the north, Tajikistan
        to the northeast, and China to the northeast and east. Occupying 652,864
        square kilometers (252,072 sq mi) of land, the country is predominantly
        mountainous with plains in the north and the southwest, which are
        separated by the Hindu Kush mountain range. Kabul is the country's
        capital and largest city. According to the World Population review, as
        of 2023, Afghanistan's population is 43 million.[6] The National
        Statistics Information Authority of Afghanistan estimated the population
        to be 32.9 million as of 2020.[27] Human habitation in Afghanistan dates
        to the Middle Paleolithic era. Popularly referred to as the graveyard of
        empires,[28] the land has witnessed numerous military campaigns,
        including those by the Persians, Alexander the Great, the Maurya Empire,
        Arab Muslims, the Mongols, the British, the Soviet Union, and a US-led
        coalition. Afghanistan also served as the source from which the
        Greco-Bactrians and the Mughals, among others, rose to form major
        empires.[29] The various conquests and periods in both the Iranian and
        Indian cultural spheres.[30][31] the area was a center for
        Zoroastrianism, Buddhism, Hinduism, and later Islam.[32] The modern
        state of Afghanistan began with the Durrani Afghan Empire in the 18th
        century,[33] although Dost Mohammad Khan is sometimes considered to be
        the founder of the first modern Afghan state.[34] Afghanistan became a
        buffer state in the Great Game between the British Empire and the
        Russian Empire. From India, the British attempted to subjugate
        Afghanistan but were repelled in the First Anglo-Afghan War; the Second
        Anglo-Afghan War saw a British victory. Following the Third Anglo-Afghan
        War in 1919, Afghanistan became free of foreign political hegemony, and
        emerged as the independent Kingdom of Afghanistan in 1926. This monarchy
        lasted almost half a century, until Zahir Shah was overthrown in 1973,
        following which the Republic of Afghanistan was established.
      </p>
      <Footer></Footer>
    </div>
  );
}

export default App;
