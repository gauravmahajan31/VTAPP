require_relative '../lib/interest'

puts 'Enter principal amount:'
principal = gets.to_i
puts 'Enter time in years:'
time = gets.to_i
interest = Interest.new do |obj|
  obj.principal = principal
  obj.time = time
end

puts "Difference is #{ interest.difference_in_interest }"
