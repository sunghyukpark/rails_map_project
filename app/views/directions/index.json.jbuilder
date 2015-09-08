json.array!(@directions) do |direction|
  json.extract! direction, :id
  json.url direction_url(direction, format: :json)
end
