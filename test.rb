def bubblesort(arr)
  sorted = false
  until sorted
    sorted = true
    i = 0
    while i < arr.length - 1
      j = i + 1
      if arr[i] > arr[j]
        arr[i], arr[j] = arr[j], arr[i]
        sorted = false
      end
      i += 1
    end
  end
  arr
end
