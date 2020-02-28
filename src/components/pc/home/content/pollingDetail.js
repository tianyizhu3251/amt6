import React, { Component } from 'react';
import $ from 'jquery';
import "animate.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card } from 'antd';
import ReactDOM from 'react-dom';
import { Radio, Input } from 'antd';
import { Button ,	message} from 'antd';
import './pollingDetail.scss';
class PollingDetail extends Component {
  constructor() {
    super();
    this.state = {
      value: 3,
      question1: "Which team do you support most?",
      hasLogined: false,
      button_name: 'submit',
      hasSubmitted: false,
      res1:'',
      res2:'',
      res3:'',
      res4:'',
      res_sentence:'',
      resr: 60

    };
  };
  componentWillMount(){

          console.log(this.state.hasSubmitted);
    if (localStorage.userid!='undefined' & localStorage.userid!='') {
      this.setState({hasLogined:true});
      // this.setState({usertocken:localStorage.usertocken,userid:localStorage.userid,userNickName:localStorage.userNickName});
    }
    if (this.statehasSubmitted==true) {
      console.log('polling')
      this.setState({button_name:'See results'})


    }




  };


   onChange(e){
     console.log('radio checked', e.target.value);
     this.setState({
       value: e.target.value,

     });

   };


   onChange2(a, b, c) {
     console.log(a, b, c);
  }
  toPercent(point){
  var str=Number(point*100).toFixed(1);
  str+="%";
  return str;
};

  submit(value){
    console.log(this.localStorage);


    if (this.state.hasSubmitted==true) {
      console.log("already submit !!!! ")
        // 直接拿答题人数结果

        var myFetchOptions = {
          method: 'GET',
          headers:{
              'Authorization': 'Bearer '+ localStorage.usertocken
          }
        };
        fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/polls/"+this.props.questionid, myFetchOptions)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          console.log(json[0].pollCount);
          var tmptotal=json[0].pollCount+json[1].pollCount+json[2].pollCount+json[3].pollCount
          console.log(tmptotal);  // z这里计算百分比显示
          this.setState({res1: json[0].pollCount/tmptotal, res2: json[1].pollCount/tmptotal, res3:json[2].pollCount/tmptotal, res4:json[3].pollCount/tmptotal,res_sentence:'people agree!' });
    //    this.setState({polling: tmp_list})  // videoarry 后面取值便利渲染
        });

    }
    else {



    console.log(this.state.value);
    console.log(this.props.questionid);
    // 下面开始提交答案
        var myFetchOptions = {
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer '+ localStorage.usertocken
          }
        };

        fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/polls/"+this.props.questionid+"/poll/"+this.state.value, myFetchOptions)
        .then(response => {
            console.log((response));
            console.log((response.status));
            if (response.status=="201") {
              message.success("Polling Submit success!");
            }
            else if (response.status=="409" || response.status=='404'){
              message.success("You have already submitted your answer!");
              this.setState({hasSubmitted:true});
              this.setState({button_name:'Click me to see result'});
            }
            else {
              message.success(" You have to login to submit this only one time!");
            //	this.setModalVisible(true);
          //		return 0;
            }
      //		  return response.json();
        //		console.log(response);

        })


      //  .then(json => {
      //    console.log(json);



        //this.setState({polling: tmp_list})  // videoarry 后面取值便利渲染
    //    });
    //  // 09f38fd0817948539d840bd426f92294


  }  };




render() {

    //  console.log("111111111111111");
    // console.log(this.state.value);

//  console.log('111');
//  console.log(this.props.question);

    const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '60px',
   }

    const hidden = {
      visible: 'hidden'
    }
    const value = 0.23;
    const percentage = 23

    const newsList1 =
        <Card title={this.props.title} extra={ <Button onClick={this.submit.bind(this)}>{this.state.button_name}</Button> } type="inner" size="small">

        <p style={{marginLeft: "60px",fontSize:"20",fontWeight:"bold"}}>{this.props.question}</p>

        <Radio.Group onChange={this.onChange.bind(this)} value={this.state.value}>

          <Radio style={radioStyle} value={this.props.ans1id} >
            {this.props.ans1}
          <span style={{color:"#e9edf5"}}> </span>
        {/*    <CircularProgressbar
          value={this.state.res1} maxValue={1} text={`${this.state.res1 * 100}%-A`} strokeWidth={8}  />
          <CircularProgressbar
          value={this.state.res2} maxValue={1} text={`${this.state.res2 * 100}%-B`} strokeWidth={8}  />  */}


          </Radio>
          <Radio style={radioStyle} value={this.state.res3}>
            {this.props.ans2} {/*   <span style={{color:'#69809B', fontSize: '14px', fontweight:'bold', marginLeft:'60px'}}>    {this.state.res2}  {this.state.res_sentence} </span>  */}

          </Radio>
          <Radio style={radioStyle} value={this.props.ans3id}>
            {this.props.ans3}    <span style={{color:"#e9edf5"}}> </span>
  {/*      <CircularProgressbar style={{  float:'right', marginTop: "20px" , marginLeft:"20px"}}
            value={this.state.res3} maxValue={1} text={`${this.state.res3 * 100}%-C`} strokeWidth={8}  />
            <CircularProgressbar style={{  float:'right', marginTop: "20px"}}
            value={this.state.res4} maxValue={1} text={`${this.state.res4 * 100}%-D`} strokeWidth={8}  />   */}
          </Radio>
          <Radio style={radioStyle} value={this.props.ans4id}>
            {this.props.ans4}
          </Radio>
        </Radio.Group>
        <div style={{textAlign:"center"}}>
             <CircularProgressbar className="circular"
                value={this.state.res1} maxValue={1} text={`${this.state.res1 * 100}%-A`} strokeWidth={8}  />
                <CircularProgressbar  className="circular"
                value={this.state.res2} maxValue={1} text={`${this.state.res2 * 100}%-B`} strokeWidth={8}  />
        </div>
          <div style={{textAlign:"center"}}>
                <CircularProgressbar className="circular"
                value={this.state.res3} maxValue={1} text={`${this.state.res3 * 100}%-C`} strokeWidth={8}  />
                <CircularProgressbar  className="circular"
                value={this.state.res4} maxValue={1} text={`${this.state.res4 * 100}%-D`} strokeWidth={8}  />
       </div>

        </Card>

  return (
<div class="pollingdetail-container" >

{newsList1}


</div>





  );
}
}

export default PollingDetail
