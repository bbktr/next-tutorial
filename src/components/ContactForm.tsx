"use client";
import { submitContactForm } from "@/lib/actions/contact";

export default function ContactForm() {
    return (
        <div>
            <form action={submitContactForm}>
                <div className="py-24 text-gray-600">
                    <div className="md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto shadow-md">
                        <h2 className="text-lg mb2">お問い合わせ</h2>
                        <div className="m-4">
                            <label htmlFor="name" className="text-sm">
                                名前
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8"
                            />
                        </div>
                        <div className="m-4">
                            <label htmlFor="email" className="text-sm">
                                メールアドレス
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none py-1 px-3 leading-8"
                            />
                        </div>
                        <button className="w-1/3 mx-auto my-1 text-white bg-indigo-500 py-2 px-6 hover:bg-indigo-600 rounded text-large">
                            送信
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
