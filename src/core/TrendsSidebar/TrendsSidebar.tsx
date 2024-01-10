import { OutlinedInput } from '@mui/material';
import { FormControl } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import Trends from "./Trends/Trends";
import FollowSuggestions from "./FollowSuggestions/FollowSuggestions";
const TrendsSidebar = () => {
    const [isInputClicked, setIsInputClicked] = useState(false);
    function handleFocus() {
        setIsInputClicked(!isInputClicked);
    }
    function handleBlur() {
        setIsInputClicked(!isInputClicked);
    }
    return(
        <div className="flex flex-col w-1/2 ml-5 mt-3">
            <form noValidate autoComplete="off">
                <FormControl
                    sx={{
                        '& .MuiInputBase-root': {
                            borderRadius: '16px',
                            height: '2.75rem',
                            width: '348px'
                        },
                    }}
                    >
                    <OutlinedInput
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="bg-grey-background"
                        sx={{
                            '& fieldset': {
                                border: isInputClicked ? '1px solid' : 'none'
                            },
                        }}
                        placeholder="Search"
                        startAdornment={
                            <InputAdornment className="left-sidebar__icons-box__home__icon" position="end">
                                <IconButton
                                    aria-label="bell icon"
                                    edge="start"
                                >
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                </FormControl>
            </form>
            <Trends/>
            <FollowSuggestions/>
        </div>
    );

}

export default TrendsSidebar;

