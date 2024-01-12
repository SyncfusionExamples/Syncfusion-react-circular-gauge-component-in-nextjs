
'use client'
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective } from '@syncfusion/ej2-react-circulargauge';
export function App() {
  return(
  <CircularGaugeComponent >
    <AxesDirective>
      <AxisDirective>
        <PointersDirective>
          <PointerDirective value={35}></PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
export default App;