import React from 'react';
import '../../assets/css/demo1.css';
class Price_Slider extends React.Component {

  
  
    render() {
    
      
      return (
       <>
      <div class="row">
  <div class="small-6 medium-2 columns">
    <input type="number" id="sliderOutput3"/>
  </div>
  <div class="small-6 medium-2 columns">
    <input type="number" id="sliderOutput4"/>
  </div>
  <div class="small-12 medium-8 columns">
    <div class="slider" data-slider data-initial-start="20000" data-start="0" data-initial-end="75000" data-end="100000" data-step="1000">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput3"></span>
      <span class="slider-fill" data-slider-fill></span>
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput4"></span>
    </div>
  </div>
  </div>
       </>
      )
    }
  }
  
export default Price_Slider;