import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Join Spice Shop
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Create an account to start shopping for premium spices
          </p>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
