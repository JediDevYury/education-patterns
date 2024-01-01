import {TemperatureConverter} from "@/components/container";
import {Fahrenheit, Kelvin} from "@/components/presentational";
import './page.css'

function TemperatureConverterPage () {
  return (
   <TemperatureConverter
   renderFahrenheit={({value}) => <Fahrenheit value={value}/>}
   renderKelvin={({value}) => <Kelvin value={value}/>}
  />)
}

export default TemperatureConverterPage;
