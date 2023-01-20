/**
 * renders scooters in table
 */
export function renderTemplate(scooters) {
  scooters.forEach((scooter) => {
    const templateString = `<tr class="hover:bg-gray-50">
      <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
        <div class="relative h-10 w-10">
          <img
            class="h-full w-full rounded-full object-cover object-center"
            src="${scooter.imgSrc}"
            alt=""
          />
          <span
            class="absolute right-0 bottom-0 h-2 w-2 rounded-full ${
              scooter.available ? 'bg-emerald-400' : 'bg-red-400'
            } ring ring-white"
          ></span>
        </div>
        <div class="text-sm">
          <div class="font-medium text-gray-700">${scooter.name}</div>
          <div class="text-gray-400">${scooter.deviceType}</div>
        </div>
      </th>
      <td class="px-6 py-4">
        <div data-scooter-available-${scooter.id}>
          <span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
            Verfügbar
          </span>
        </div>
        <div class="hidden" data-scooter-booked-${scooter.id}>
          <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600"
          >
            <span class="h-1.5 w-1.5 rounded-full bg-red-600"></span>
            Ausgeliehen
          </span>
        </div>
      </td>
      <td class="px-6 py-4">${scooter.pricePerMin.toFixed(2)}</td>
      <td class="px-6 py-4">${scooter.pricePerKm.toFixed(2)}</td>
      <td class="px-6 py-4">
        <div class="flex gap-2">
          <span
            id="scooter-timer-${scooter.id}"
            class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
          >
            ${scooter.rentingTimer}
          </span>
        </div>
      </td>
      <td class="px-6 py-4">
        <div class="flex justify-end gap-4">
          <button
            data-scooterid="${scooter.id}"
            data-type="book"
            class="bg-emerald-600 hover:bg-emerald-800 text-white font-bold py-2 px-4 rounded-full book-scooter"
          >
            Ausleihen
          </button>
          <button
            data-scooterid="${scooter.id}"
            data-type="return"
            class="hidden bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded-full return-scooter"
          >
            Zurückgeben
          </button>
        </div>
      </td>
    </tr>`;
    document
      .querySelector('#table-body')
      .insertAdjacentHTML('beforebegin', templateString);
  });
}
