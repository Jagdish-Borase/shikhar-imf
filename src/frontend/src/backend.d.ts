import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AdvisorApplication {
    name: string;
    email: string;
    experience: string;
    timestamp: Time;
    phone: string;
    location: string;
}
export type Time = bigint;
export interface ContactForm {
    insuranceType: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllAdvisorApplications(): Promise<Array<AdvisorApplication>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    submitAdvisorApplication(app: AdvisorApplication): Promise<void>;
    submitContactForm(form: ContactForm): Promise<void>;
}
