import { useState } from 'react'
import './tailwind.css'
import Station from "./Components/Station"
import Intersection from "./Components/Intersection"
import Line from "./Components/Line"

function App() {
  const station1_route = "M -20 600 H 50 A 15 15 0 0 0 60 590 V 520 A 15 15 0 0 0 50 510 H 0 A 15 15 0 0 1 -10 500 V 410 A 15 15 0 0 1 0 400 H 160 A 15 15 0 0 1 170 410 V 470 A 15 15 0 0 0 180 480 H 250 A 15 15 0 0 1 260 490 V 570 A 15 15 0 0 0 270 580 H 300 A 15 15 0 0 0 310 570 V 440 A 15 15 0 0 0 300 430 H 260 A 15 15 0 0 1 250 420 V 300 A 15 15 0 0 1 260 290 H 330 A 15 15 0 0 0 340 280 V 250 A 15 15 0 0 1 350 240 H 360 A 15 15 0 0 1 370 250 V 390 A 15 15 0 0 0 380 400 H 500"
  const station1_colour = "stroke-black"

  const station2_route = "M -50 100 V 180 A 15 15 0 0 1 -60 190 H -130 A 15 15 0 0 0 -140 200 V 270 A 15 15 0 0 1 -150 280 H -200 A 15 15 0 0 0 -210 290 V 420 A 15 15 0 0 0 -200 430 H -50 A 15 15 0 0 0 -40 420 V 330 A 15 15 0 0 1 -30 320 H 50 A 15 15 0 0 1 60 330 V 370 A 15 15 0 0 0 70 380 H 200 A 15 15 0 0 0 210 370 V 250 A 15 15 0 0 1 220 240 H 300 A 15 15 0 0 0 310 230 V 180 A 15 15 0 0 1 320 170 H 380 A 15 15 0 0 1 390 180 V 330 A 15 15 0 0 0 400 340 H 450 A 15 15 0 0 0 460 330 V 280 A 15 15 0 0 1 470 270 H 490 A 15 15 0 0 1 500 280 V 400"
  const station2_colour = "stroke-red-700"

  const station3_route = "M 1100 500 V 300 A 15 15 0 0 0 1090 290 H 1010 A 15 15 0 0 0 1000 300 V 400 A 15 15 0 0 1 990 410 H 940 A 15 15 0 0 1 930 400 V 370 A 15 15 0 0 0 920 360 H 860 A 15 15 0 0 1 850 350 V 310 A 15 15 0 0 0 840 300 H 800 A 15 15 0 0 1 790 290 V 260 A 15 15 0 0 0 780 250 H 775 A 15 15 0 0 0 765 260 V 500 A 15 15 0 0 1 755 510 H 650 A 15 15 0 0 1 640 500 V 420 A 15 15 0 0 0 630 410 H 500"
  const station3_colour = "stroke-teal-700"

  const station4_route = "M 750 200 H 700 A 15 15 0 0 1 690 190 V 120 A 15 15 0 0 0 680 110 H 640 A 15 15 0 0 0 630 120 V 270 A 15 15 0 0 1 620 280 H 580 A 15 15 0 0 0 570 290 V 340 A 15 15 0 0 0 580 350 H 680 A 15 15 0 0 0 690 340 V 290 A 15 15 0 0 1 700 280 H 740 A 15 15 0 0 1 750 290 V 380 A 15 15 0 0 1 740 390 H 500"
  const station4_colour = "stroke-purple-800"

  const station5_route = "M 600 700 H 500 A 15 15 0 0 0 490 710 V 750 A 15 15 0 0 1 480 760 H 400 A 15 15 0 0 1 390 750 V 740 A 15 15 0 0 0 380 730 H 300 A 15 15 0 0 0 290 740 V 770 A 15 15 0 0 1 280 780 H 150 A 15 15 0 0 1 140 770 V 530 A 15 15 0 0 1 150 520 H 230 A 15 15 0 0 1 240 530 V 640 A 15 15 0 0 0 250 650 H 300 A 15 15 0 0 0 310 640 V 600 A 15 15 0 0 1 320 590 H 360 A 15 15 0 0 0 370 580 V 540 A 15 15 0 0 1 380 530 H 450 A 15 15 0 0 1 460 540 V 620 A 15 15 0 0 0 470 630 H 485 A 15 15 0 0 0 495 620 V 400"
  const station5_colour = "stroke-blue-700"

  const station6_route = "M 950 670 V 550 A 15 15 0 0 0 940 540 H 880 A 15 15 0 0 1 870 530 V 450 A 15 15 0 0 0 860 440 H 820 A 15 15 0 0 0 810 450 V 570 A 15 15 0 0 1 800 580 H 750 A 15 15 0 0 0 740 590 V 650 A 15 15 0 0 0 750 660 H 790 A 15 15 0 0 1 800 670 V 740 A 15 15 0 0 1 790 750 H 700 A 15 15 0 0 1 690 740 V 600 A 15 15 0 0 0 680 590 H 600 A 15 15 0 0 1 590 580 V 500 A 15 15 0 0 0 580 490 H 520 A 15 15 0 0 1 510 480 V 400"
  const station6_colour = "stroke-yellow-500"

  return (
    <svg viewBox="0 0 1000 900" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen">
    {/* <svg viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid meet" className="w-screen h-screen"> */}
      
      {/* Station 1 */}
      <Line route={station1_route} colour={station1_colour}/>
      <Station x="-20" y="600" colour={station1_colour}/>

      {/* Station 2 */}
      <Line route={station2_route} colour={station2_colour}/>
      <Station x="-50" y="100" colour={station2_colour}/>

      {/* Station 3 */}
      <Line route={station3_route} colour={station3_colour}/>
      <Station x="1100" y="500" colour={station3_colour}/>

      {/* Station 4 */}
      <Line route={station4_route} colour={station4_colour}/>
      <Station x="750" y="200" colour={station4_colour}/>
      
      {/* Station 5 */}
      <Line route={station5_route} colour={station5_colour}/>
      <Station x="600" y="700" colour={station5_colour}/>
      
      {/* Station 6 */}
      <Line route={station6_route} colour={station6_colour}/>
      <Station x="950" y="670" colour={station6_colour}/>

      <Intersection x="500" y="400"/>
    </svg>
  )
}

export default App
