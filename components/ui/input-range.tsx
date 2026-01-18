export default function InputRange() {
    
  return (
    <>
      <input
        type="range"
        className="w-full h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-pink-500 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-pink-600 [&::-webkit-slider-thumb]:rounded-full"
        min="0"
        max="100"
        step="10"
        value="50"
        onInput={"this.nextElementSibling.innerText = this.value"}
      />
      <label className="w-full">
        <span className="text-sm text-gray-600">Range</span>
      </label>
    </>
  );
}
