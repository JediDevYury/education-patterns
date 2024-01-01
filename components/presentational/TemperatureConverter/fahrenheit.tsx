export type FahrenheitProps = {
  value: number;
}

export function Fahrenheit({ value }: FahrenheitProps) {
  return (
   <div className="temp-card">
     The temperature in Fahrenheit is:
     <span className="temp">{value}°F</span>
   </div>
  );
}
