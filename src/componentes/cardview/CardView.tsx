import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CardViewProps {
    title?: string;
    image?: string;
    children?: React.ReactNode;
}

const CardView: React.FC<CardViewProps> = ({ title, image, children }) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
            {image && (
                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt={title}
                />
            )}
            <CardContent>
                {title && (
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                )}
                {children && (
                    <Typography variant="body2" color="text.secondary">
                        {children}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default CardView;

