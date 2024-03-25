/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BookRegister(props) {
    return (
        <div>
            <div>
                <h1>도서 등록</h1>
                <div>
                    <button>추가</button>
                    <button>저장</button>
                </div>
            </div>
            <ul>
                <li>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>도서코드</div>
                    <div>도서형식</div>
                    <div>카테고리</div>
                    <div>도서명</div>
                    <div>저자명</div>
                    <div>출판사</div>
                    <div>표지URL</div>
                </li>
            </ul>
        </div>
    );
}

export default BookRegister;