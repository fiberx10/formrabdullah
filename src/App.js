import React, { useState } from "react";
import "./App.css";

import left_arrow from "./icons/left-arrow.png";
import right_arrow from "./icons/right-arrow.png";

const products = require("./products.json");

const TopTitle = () => {
  return (
    <h1 className="TopText">
      lets's plan your <span className="TopTexttip">loan</span>
    </h1>
  );
};

class Containner extends React.Component {
  state = {
    month: 1,

    por: {
      per_1: "blue",
      per_2: "white",
      per_3: "white",
    },
    select: 1,
    tergetdate: {
      month: "January",
      year: 2021,
    },
    
    amountinputstate: "#CBD5DC",
  };
  state = {...this.state ,amounttextinnput: {
      text: products[this.state.select -1].min_amount,
    }, }
  updatemoth(e, c) {
    e.preventDefault();
    console.log(
      products[this.state.select - 1].max_tenure,
      products[this.state.select - 1].min_tenure
    );
    if (
      this.state.month + c <= products[this.state.select - 1].max_tenure &&
      this.state.month + c >= products[this.state.select - 1].min_tenure
    ) {
      this.setState({
        month: this.state.month + c,
      });
    }
    const monthsNum = {
      [1]: "January",
      [2]: "February",
      [3]: "March",
      [4]: "April",
      [5]: "May",
      [6]: "June",
      [7]: "July",
      [8]: "August",
      [9]: "September",
      [10]: "October",
      [11]: "November",
      [12]: "December",
    };
    let d = new Date();
    var n = d.getMonth() + this.state.month;
    let targetYear = d.getFullYear() + parseInt(n / 12, 10);
    let tergetMonth = monthsNum[parseInt(n % 12, 10) + 1];
    this.setState({
      tergetdate: {
        month: tergetMonth,
        year: targetYear,
      },
    });
  }
  chosepro = (e, c) => {
    const input  = document.querySelector(".Container_item_left_textinput");
    e.preventDefault();
    switch (c) {
      case 1:
        this.setState({
          por: {
            per_1: "blue",
            per_2: "white",
            per_3: "white",
          },
          month: 1,
          select: 1,
          amounttextinnput : {text : products[0].min_amount} ,
          
        });


        
        break;
      case 2:
        this.setState({
          por: {
            per_1: "white",
            per_2: "blue",
            per_3: "white",
          },
          month: 1,
          select: 2,

          amounttextinnput : {text : products[1].min_amount}  ,
       
        });
     
        break;
      case 3:
        this.setState({
          por: {
            per_1: "white",
            per_2: "white",
            per_3: "blue",
          },
          month: 1,
          select: 3,
          amounttextinnput : {text : products[2].min_amount},
        });
       
        
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <div className="Container">
          <div className="Container_item">
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: this.state.por.per_1,
                margin: "10px",
                boxShadow: " 0 4 0.2 10 #171717",
                cursor: "pointer",
              }}
            >
              <img
                onClick={(e) => {
                  this.chosepro(e, 1);
                }}
                src={products[1].image}
                className="icon"
              />
            </div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: this.state.por.per_2,
                margin: "10px",
                boxShadow: " 0 4 0.2 10 #171717",
                cursor: "pointer",
              }}
            >
              <img
                onClick={(e) => {
                  this.chosepro(e, 2);
                }}
                src={products[0].image}
                className="icon"
              />
            </div>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: this.state.por.per_3,
                margin: "10px",
                boxShadow: " 0 4 0.2 10 #171717",
                cursor: "pointer",
              }}
            >
              <img
                onClick={(e) => {
                  this.chosepro(e, 3);
                }}
                src={products[2].image}
                className="icon"
              />
            </div>
          </div>

          <div className="Container_item">
            <div className="Container_item_left">
              <h4 className="Container_item_left_title">laon amount</h4>
              <div
                style={{
                  width: "90%",
                  maxHeight: "60%",
                  borderRadius: "5px",
                  border: `1px solid  ${this.state.amountinputstate} `,
                  fontSize: "20px",
                  fontWeight: "bold",

                  display: "flex",

                  alignItems: "center",
                }}
              >
                <h1 className="Container_item_left_insider_dollarisign">$</h1>
                <input
                  id="amout_input"
                  value={this.state.amounttextinnput.text}
                  maxLength={7}
                  keyboardType={"numeric"}
                  onChange={(text) => {
                    console.log(
                      parseInt(text.target.value , 10),
                      products[this.state.select - 1].max_amount
                    );

                    if (
                      parseInt(text.target.value, 10) <
                        products[this.state.select - 1].min_amount ||
                      parseInt(text.target.value, 10) >
                        products[this.state.select - 1].max_amount
                    ) {
                      this.setState({
                        amountinputstate: "red",
                      });
                    } else {
                      this.setState({
                        amountinputstate: "#CBD5DC",
                      });
                    }
                    
                    this.setState({
                      amounttextinnput: {
                        text: ()=>   {return isNaN(parseInt(text.target.value , 10)) ? 0 : parseInt(text.target.value , 10)}
                      },
                    });

                    this.setState({
                      amounttextinnput: {
                        text: parseInt(text.target.value , 10)
                          .toString().replace(/[^0-9.,]/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                      },
                    });
                    
                  }}
                  placeholder="1200"
                  className="Container_item_left_textinput"
                ></input>
              </div>
            </div>
            <div className="Container_item_right">
              <h4 className="Container_item_right_title">number of months</h4>
              <div className="Container_item_right_insider">
                <div className="Container_item_right_insider_arrow">
                  <img
                    onClick={(e) => {
                      this.updatemoth(e, -1);
                    }}
                    src={left_arrow}
                    className="Container_item_right_insider_arrow_icon"
                  />
                </div>
                <input
                  value={this.state.month}
                  keyboardType="numeric"
                  className="Container_item_right_textinput"
                  onChangeText={(text) => {
                    this.setState({ month: parseInt(text , 10)  });
                  }}
                  onKeyDown={(e) => {
                    switch (e.key) {
                      case "ArrowUp":
                        this.updatemoth(e, 1);
                        break;
                      case "ArrowDown":
                        this.updatemoth(e, -1);
                        break;
                    }
                  }}
                ></input>
                <div className="Container_item_right_insider_arrow">
                  <img
                    onClick={(e) => {
                      this.updatemoth(e, 1);
                    }}
                    src={right_arrow}
                    className="Container_item_right_insider_arrow_icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="Container_item2">
            <div className="Container_item2_insider">
              <div className="Container_item2_insider_top">
                <h6 className="Container_item2_insider_top_title">
                  monthly amount
                </h6>
                <h4 className="Container_item2_insider_top_value">
                  {(
                    (parseInt(this.state.amounttextinnput.text, 10)  || 0) /
                    this.state.month
                  ).toFixed(3)}
                  $
                </h4>
              </div>
              <div className="Container_item2_insider_bottom">
                <p className="Container_item2_insider_bottom_text">
                  You’re planning {this.state.month} monthly deposits to reach
                  your goal by {this.state.tergetdate.month} ,{" "}
                  {this.state.tergetdate.year} . The total amount loaned will be
                  $
                  {(parseInt(this.state.amounttextinnput.text.toString().replace(/[^0-9]/g, ""), 10) || 0) +
                    (parseInt(this.state.amounttextinnput.text.toString().replace(/[^0-9]/g, ""), 10) || 0) *
                      products[this.state.select - 1].interest}
                </p>
              </div>
            </div>
          </div>
          <div className="Container_item3">
            <h1 className="Container_item3_text">Applay Now</h1>
          </div>
        </div>
      </>
    );
  }
}

function App() {
  return (
    <div className="app">
      <TopTitle></TopTitle>
      <Containner></Containner>
    </div>
  );
}

export default App;
