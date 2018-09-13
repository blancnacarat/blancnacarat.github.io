# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "blanc-nacarat"
  spec.version       = "2.5"
  spec.authors       = ["Blanc Nacarat"]
  spec.email         = ["nacarat.co@gmail.com"]

  spec.summary       = %q{BLANC NACARAT RECORDS LABEL}
  spec.homepage      = "https://blancnacarat.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "bundler", "~> 1.12"
end