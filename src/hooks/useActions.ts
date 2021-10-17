import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CoinsActionCreators from '../store/action-creators/coins'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(CoinsActionCreators, dispatch)
}