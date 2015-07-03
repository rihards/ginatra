require_relative '../spec_helper.rb'

describe Ginatra::Stat do
  before { @stat = Ginatra::Stat }

  describe "commits" do
    full_params = {from: "9 Feb 2015",
                   til: "9 March 2015",
                   by: "Nathan Dao",
                   in: "repo_1"}

    # Test all combinations of params
    (0..4).to_a.each do |size|
      full_params.keys.combination(size).to_a.each do |combi|
        params = combi.inject({}) { |p, k|
          p.merge!({k => full_params[k]})
          p
        }

        context "#{params.to_s}" do
          it "should return return the correct commits data" do
            Ginatra::Stat.commits(params).each do |v|
              expect(same_commit_arrays?(v[1], get_repo(v[0]).commits(params))).to be true
            end
          end
        end
      end
    end

    context "with invalid params" do
      let(:commits) { Ginatra::Stat.commits(with: "invalid params") }

      it "should ignore the params and return full commits" do
        Ginatra::Stat.commits.each do |repo_commits|
          repo_id = repo_commits[0]
          expect(same_commit_arrays?(commits[repo_id], repo_commits[1])).to be true
        end
      end
    end
  end

  describe "commits_overview" do

  end
end
