import React from 'react'

export default function FormText() {
    const textPswd = React.useRef();
    const textPswd2 = React.useRef();

    const onBlurPassword1 = () => {
        let pswd = textPswd.current.value;
        if (pswd !== '' && !pswd.match(/^[0-9a-zA-Z]+$/)) {
            textPswd.current.value = ''
            alert('You cannot use special character in a password.')
        }
    }

    const onBlurPassword2 = () => {
        let pswd2 = textPswd2.current.value;
        if (pswd2 !== '' && !pswd2.match(/^[0-9a-zA-Z]+$/)) {
            textPswd2.current.value = ''
            alert('Password unmatched, please check again and try again.')
        }
    }

    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style={{ width: '400px', background: '#cee' }}>
            <form>
                <div className="form-group mb-2">
                    <label htmlFor="login">Username Login</label>
                    <input type="text" id="login" name="login" maxLength="20"
                        className="form-control form-control-sm" />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="pswd">Password</label>
                    <input type='text' id="pswd" name="pswd" maxLength="10"
                        className="form-control form-control-sm"
                        ref={textPswd} onBlur={onBlurPassword1} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="pswd2">Re-Enter Password</label>
                    <input type='text' id="pswd2"
                        className="form-control form-control-sm"
                        ref={textPswd2} onBlur={onBlurPassword2} />
                </div>

                <div className="from-group mb-4">
                    <label htmlFor="memo">Memo TextArea</label>
                    <textarea id="memo" name="memo" rows="2"
                        maxLength="200"
                        className="form-control form-control-sm">
                    </textarea>
                </div>

                <div className="text-center">
                    <button className="btn btn-sm px-4 btn-primary">
                        OK
                    </button>
                </div>
            </form>
        </div>
    )

}
