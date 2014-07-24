require_relative 'invalid_name_error'

class Name
  attr_reader :first_name, :last_name

  def blank?(string)
  string.nil? || string.empty?
  end

  def initialize(first_name, last_name)
    if blank?(first_name)
      raise InvalidNameError.new('First name can not be empty.')
    elsif blank?(last_name)
      raise InvalidNameError.new('Last name can not be empty.')
    elsif first_name[0] !~ /[A-Z]/
      raise InvalidNameError.new('First letter of first name must be capital.')
    else
      @first_name = first_name
      @last_name = last_name
    end
  end

end
