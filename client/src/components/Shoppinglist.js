import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {v1 as uuid} from 'uuid';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../action/itemAction'; 
import PropType from 'prop-types';


class Shoppinglist extends Component{

// to fetch data when Shopping List comnponent Mount or Called
componentDidMount(){
    this.props.getItems();
}

onDeleteClick=(id)=>{
this.props.deleteItem(id);
}

    render(){
        const {items}=this.props.item;
        return(
            <Container>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id,name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button color="danger" size="sm" onClick={this.onDeleteClick.bind(this,_id)}
                                    >&times;</Button> {name} </ListGroupItem>
                            </CSSTransition>
        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

// Shoppinglist.prototype={
//     getItems:PropType.func.isRequired,
//     item:PropType.object.isRequired
// };

const mapStateToProps=(state)=>({     // feching data from Reducer state
    item:state.item
});

export default connect(mapStateToProps,{ getItems,deleteItem})(Shoppinglist);


// export const getItems=()=>{
//     return{
//         type:GET_ITEM
//     };
// }

// export const deleteItem=(id)=>{
//     return{
//         type:DELETE_ITEM,
//         payload:id
//     };
// }
