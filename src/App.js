import "./App.css";

function App() {
  return (
    <nav>
    <div className="container">
      <h1 className="container_head">Agriculture</h1>
      <p className="container_paragraph">
        Agriculture encompasses crop and livestock production, aquaculture,
        fisheries, and forestry for food and non-food products. Agriculture was
        the key development in the rise of sedentary human civilization, whereby
        farming of domesticated species created food surpluses that enabled
        people to live in cities.
      </p>
    </div>
    <div className="div_element">
     CSS BOX-MODEL
      </div>
      <div className="positioning">
         POSITIONING
      </div>
      <div className="backgrounds">
        BACKGROUNDS
      </div>
      <div className="div_forms">
        <form>
          <input type="text"/> <br/><br/>
          <button className="btn_save">Save</button>
        </form>
      </div>
      <div class="flex_container">
  <div class="child">child 1</div>
  <div class="child"> child 2</div>
  <div class="child">child 3</div>
  <div class="child">child 4</div>
  <div class="child">child 5</div>
</div>
<div class="grid-container">
  <div class="item item1">Grid 1 </div>
  <div class="item item2">Grid 2</div>
  <div class="item item3">Grid 3</div>
  <div class="item item4">Grid 4 </div>
  <div class="item item5">Grid 5</div>
  <div class="item item6">Grid 6</div>
</div>
<div className="list_container">
   <ol>
    <li className="list_item">Apple</li>
    <li className="list_item">Banana</li>
    <li className="list_item">Orange</li>
    <li className="list_item">Guava</li>
   </ol>
</div>
<div className="before_after">
  <h1>Before and after</h1>
  <p>Before and After in css</p>
  <h3>my name is</h3>
</div>
    </nav>
  );
}

export default App;
