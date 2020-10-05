export const setNationality = (nationLabel) => {
    switch (nationLabel) {
        case 'US':
            return 'American'
            break;
        case 'AU':
            return 'Australian';
            break;
        case 'BR':
            return 'Brazilian';
            break;
        case 'CA':
            return 'Canadian';
            break;
        case 'CH':
            return 'Swiss';
            break;
        case 'DE':
            return 'German';
            break;
        case 'DK':
            return 'Danish';
            break;
        case 'FI':
            return 'Finnish';
            break;
        case 'FR':
            return 'French';
            break;
        case 'GB':
            return 'British';
            break;
        case 'IE':
            return 'Irish';
            break;
        case 'IR':
            return 'Iranian';
            break;
        case 'NO':
            return 'Norwegian';
            break;
        case 'NZ':
            return 'New Zealander';
            break;
        case 'TR':
            return 'Turkish';
            break;
        case 'ES':
            return 'Spanish';
            break;
        case 'NL':
            return 'Dutch';
            break;

        default:
            break;
    }
    // return nationalities;
}
