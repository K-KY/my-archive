import React, { useRef } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface CardViewProps {
    title?: string;
    image?: string;
    children?: React.ReactNode;
}

const CardView: React.FC<CardViewProps> = ({ title, image, children }) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // 카드 내부 상대 좌표 (px)
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // CSS 변수로 전달
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
    };

    const handleMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        // 호버 종료 시 opacity 0으로
        el.style.setProperty('--ripple-opacity', '0');
    };

    const handleMouseEnter = () => {
        const el = ref.current;
        if (!el) return;
        el.style.setProperty('--ripple-opacity', '1');
    };

    return (
        <Card
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            sx={{
                maxWidth: 345,
                borderRadius: 3,
                boxShadow: 5,
                position: 'relative',
                overflow: 'hidden',
                '--mx': '50%',
                '--my': '50%',
                '--ripple-opacity': 0,

                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 'var(--mx)',
                    top: 'var(--my)',
                    width: 0,
                    height: 0,
                    pointerEvents: 'none',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%) scale(0)',
                    background:
                        'radial-gradient(circle, rgba(0,0,0,0.18) 10%, rgba(0,0,0,0.08) 30%, transparent 60%)',
                    transition:
                        'width 650ms cubic-bezier(.2,.8,.2,1), height 650ms cubic-bezier(.2,.8,.2,1),' +
                        ' transform 650ms cubic-bezier(.2,.8,.2,1), opacity 650ms ease',
                    opacity: 'var(--ripple-opacity)',
                },

                '&:hover::after': {
                    width: '160%',
                    height: '160%',
                    transform: 'translate(-50%, -50%) scale(0.7)',
                    opacity: 1,
                },
            }}
        >
            {image && (
                <CardMedia component="img" height="160" image={image} alt={title} />
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
