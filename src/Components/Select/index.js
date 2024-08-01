import React, {useState} from 'react'
import './style.scss';
import Select from 'react-select';

export default function CustomSelect(props) {
    const {className = "",type = "text", name, value, onChange, placeholder, options = [], searchable = false} = props;
    // const [selectedOption, setSelectedOption] = useState(null);
    const style = {
        control: base => ({
            ...base,
            // border: 0,
            // This line disable the blue border
            // boxShadow: "none",
            borderColor : '#00A45F'
        })
    };
    return (
        <>
            {
                searchable ?
                    <Select
                        defaultValue={value}
                        onChange={(option) => {
                            onChange(option)
                        }}
                        options={options}
                        className={className}
                        styles={style}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 10,
                            height : 40,
                        })}
                    />
                    :
                    <label className="input  w-100">
                        <select
                            className="input__field"
                            type={type}
                            name={name}
                            value={value}
                            onChange={onChange}
                            placeholder=" "
                        >
                            <option value={''}>{`Select ${name}`}</option>
                            {
                                options.map((opt, key) => <option value={opt.value}>{opt.label}</option>)
                            }
                        </select>
                        <span className="input__label">{placeholder}</span>
                    </label>
            }
        </>
    )
}
