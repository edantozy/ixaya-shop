import { useState, FC } from "react"
import Typography from "@mui/material/Typography"

interface Props {
    text: string
}

export const ReadMore: FC<Props> = ({ text }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <>
            <Typography variant="body1" className="text">
                {isReadMore ? text.slice(0, 150) : text}
            </Typography>
            <Typography variant="body2" color="secondary" sx={{ cursor: 'pointer' }} onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...leer más" : " mostrar menos"}
            </Typography>
        </>
    );
};