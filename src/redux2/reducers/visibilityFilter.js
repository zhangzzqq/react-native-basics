import {visibilityFilters} from '../global';
import {SET_VISIBILITY_FILTER} from '../actions/types';

const {SHOW_ALL} = visibilityFilters;

const visibleTypeFilter = (state = SHOW_ALL, action) => {

    let {type, filter} = action;

    switch (type) {
        case SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state;
    }
};

export default visibleTypeFilter;
