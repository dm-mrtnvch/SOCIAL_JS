import React from 'react';
import dialogsReducer from '../../../redux/dialogs-reducer';

// import s from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode () {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
            </div>

        );
    }

}


export default ProfileStatus;