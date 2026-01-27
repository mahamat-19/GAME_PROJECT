
const getCropedImageUrl = (url: string, size: 'small' | 'medium' | 'large'): string => {
    if (!url) return '';
    const sizeMap: { [key: string]: string } = {
        small: 'crop/200/200',
        medium: 'crop/400/400',
        large: 'crop/800/800',
    };
    return url.replace(/media\/screenshots/, `media/${sizeMap[size]}`);
};
export default getCropedImageUrl;