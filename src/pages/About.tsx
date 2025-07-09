import {useState} from "react";

const About = () => {
    const [activeTab, setActiveTab] = useState('story');

    const tabs = [
        {id: 'story', label: 'Our Story'},
        {id: 'mission', label: 'Mission & Vision'},
        {id: 'team', label: 'Our Team'}
    ];

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-tr text-white p-8">
                        <h1 className="text-3xl font-bold mb-4">About Taratonic</h1>
                        <p className="text-primary-100">
                            Discover our journey, values, and the passionate team behind our success.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="border-b">
                        <nav className="flex">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-b text-primary-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        {activeTab === 'story' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold text-white">Our Story</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                    it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English. Many desktop publishing
                                    packages and web page editors now use Lorem Ipsum as their default model text, and a
                                    search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                </p>
                                <div className="bg-gradient-to-tr p-6 rounded-lg">
                                    <h3 className="font-semibold text-white mb-2">Key Milestones</h3>
                                    <ul className="space-y-2 text-primary-100">
                                        <li>• 2020: Company founded with 3 team members</li>
                                        <li>• 2021: Launched our first major product</li>
                                        <li>• 2022: Expanded to serve international clients</li>
                                        <li>• 2023: Reached 500+ satisfied customers</li>
                                        <li>• 2024: Opened new office and expanded team to 50+</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'mission' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        To empower businesses with innovative technology solutions that drive growth,
                                        efficiency, and competitive advantage in an ever-evolving digital landscape.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                                    <p className="text-gray-300 leading-relaxed">
                                        To be the leading technology partner for businesses worldwide, known for our
                                        commitment to excellence, innovation, and customer success.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            {
                                                title: 'Innovation',
                                                description: 'We embrace creativity and forward-thinking solutions'
                                            },
                                            {
                                                title: 'Quality',
                                                description: 'Excellence is our standard in every project'
                                            },
                                            {
                                                title: 'Integrity',
                                                description: 'Honest and transparent in all our dealings'
                                            },
                                            {
                                                title: 'Collaboration',
                                                description: 'Working together to achieve shared success'
                                            }
                                        ].map((value, index) => (
                                            <div key={index} className="bg-gradient-to-l p-4 rounded-lg">
                                                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                                                <p className="text-gray-300 text-sm">{value.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'team' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold text-white">Meet Our Team</h2>
                                <p className="text-gray-400">
                                    Our diverse team of experts brings together years of experience in technology,
                                    design, and business strategy.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        {name: 'John Doe', role: 'CEO & Founder', image: '👩‍💼'},
                                        {name: 'John Doe', role: 'CTO', image: '👨‍💻'},
                                        {name: 'John Doe', role: 'Head of Design', image: '👩‍🎨'},
                                        {name: 'John Doe', role: 'Lead Developer', image: '👨‍💻'},
                                        {name: 'John Doe', role: 'Project Manager', image: '👩‍💼'},
                                        {name: 'John Doe', role: 'Marketing Director', image: '👨‍💼'}
                                    ].map((member, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-6xl mb-4">{member.image}</div>
                                            <h3 className="font-semibold text-primary-100">{member.name}</h3>
                                            <p className="text-gray-50 text-sm">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;