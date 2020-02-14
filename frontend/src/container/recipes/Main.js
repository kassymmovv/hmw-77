import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessages, postMessage} from "../../sore/actions";
import MessageForm from "../../components/messageForm";
import Card from "reactstrap/es/Card";

class Main extends Component {
    componentDidMount() {
        this.props.getMessage()
    }

    createMessageHandler = async formData => {
        await this.props.postMessage(formData)
    };
    render() {

        return (
            <div>

                <MessageForm
                    onSubmit={this.createMessageHandler}
                />
                {this.props.messages.map(mess => (
                    <Card key={mess.id}>
                        {mess.title}
                        <img src={'http://localhost:1212/uploads/'+mess.image} alt="" style={{height:100,width:100}}/>

                        <span>{mess.description}</span>
                    </Card>

                ))}
            </div>
        );
    }
}
const mapStateToProps = state => ({
   messages:state.messages
});

const mapDispatchToProps = dispatch => ({
   postMessage:mess => dispatch(postMessage(mess)),
    getMessage:() => dispatch(getMessages())
});
export default connect(mapStateToProps,mapDispatchToProps) (Main);