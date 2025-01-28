export class Profile {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public age: number
    ) {}

    static validateEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    static validatePhone(phone: number): boolean {
        const phonePattern = /^[0-9]{10}$/; 
        return phonePattern.test(phone.toString());
    }

    static validateAge(age: number): boolean {
        return age > 0 && age < 100; 
    }
}
