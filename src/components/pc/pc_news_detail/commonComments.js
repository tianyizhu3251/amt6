import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Card,
	Rate,
	notification
} from 'antd';


import './commonComments.scss';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: '',
			value: 4,
		};
	};
	handleChange = value => {
		console.log(value)
		this.setState({ value });
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET',
			headers:{
					'Authorization': 'Bearer '+ localStorage.usertocken
			}
		};
		fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news/" + this.props.uniquekey + "/reviews", myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
	};
	handleSubmit(e) {
			const	{ value } = this.state;
		e.preventDefault();
			var formdata = this.props.form.getFieldsValue();
			let body={
				"newsReviewId": this.props.uniquekey,
				"rating": value,
				"reviewComments": formdata.remark
				};
				body = JSON.stringify(body, null, 2);

				console.log(body);
		var myFetchOptions = {
			method: 'POST',
			headers:{
					'Authorization': 'Bearer '+ localStorage.usertocken,
					'Content-Type': "application/json"
			},
			body
		};
		/* 		newsReviewId: this.props.uniquekey,
				rating:0,
			reviewComments: formdata.remark */

		fetch("https://api.americanmuslimtoday.net/amt-news/api/v1/news/"+ this.props.uniquekey+ "/reviews", myFetchOptions)
		.then(response =>{
	console.log(response.body);
	if (response.status=="401") {
		message.success("You should login first");
	}
	if (response.status=="409") {
		message.success("You have already reviewed this article! ");
	}
	if (response.status=="201") {
		message.success("Review success! ");

	}
		this.componentDidMount();
		})
	};
	addUserCollection() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
		});
	};
	render() {
		  const { value } = this.state; // value record how many stars the user give
		let {getFieldProps} = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length
			? comments.map((comment, index) => (

				<Card type="inner" className="comment-list" key={index} title={comment.userName} hoverable extra={< a href = "#" > updated on {comment.updatedDate} < /a>}>
					<p>{comment.reviewComments}</p>
					<Rate disabled defaultValue={comment.rating} />
				</Card>

			))
			: 'There is no reviews now. Want to see review or post by yourself? Just log in Please ! ';
		return (
			<div className="comment">
				<Row>
					<Col span={24}>
					<div className="comment-list-total" >
						{commnetList}
					</div>
						<div class="write-review">
            <Card key={1} title={'user comment'} bordered={false}  hoverable extra={< a href = "#" > updated on  < /a>}	>
						<Form onSubmit ={this.handleSubmit.bind(this)}>
							<FormItem label="Your Review">
								<Input type="textarea" placeholder="Please write your idea" {...getFieldProps('remark',{initialValue: ''})}/>

							</FormItem>
							<div className="rating">
								<Rate tooltips={desc} onChange={this.handleChange} value={value} />

								{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
							</div>

							<Button type="primary" htmlType="submit">Submit My review</Button>
							&nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>Save to my favourite</Button>
						</Form>
            </Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	};
}
export default CommonComments = Form.create({})(CommonComments);
