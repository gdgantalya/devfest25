import Form from "../components/Form";

export default function Sponsors() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center"> Sponsorship</h1>
            <p className="text-center mb-6 text-gray-700">
                If you would like to sponsor our event, please fill out the form below!!
            </p>
            <Form title="Sponsor Application" />
        </div>
    );
}
